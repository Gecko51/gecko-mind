import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, timestamp } = await req.json();
    console.log('Received message:', message, 'at', timestamp);

    const WEBHOOK_URL = 'https://n8n.srv810123.hstgr.cloud/webhook/5ce53611-5760-41e5-aadd-c9704d4b634a';

    // Build URL with query parameters (GET method)
    const params = new URLSearchParams({
      message: message,
      timestamp: timestamp || new Date().toISOString(),
      session_id: 'gecko-chat-' + Date.now(),
      source: 'GeckoLabs ChatBot'
    });
    
    const webhookUrlWithParams = `${WEBHOOK_URL}?${params.toString()}`;
    console.log('Calling webhook with GET:', webhookUrlWithParams);

    // Call n8n webhook with GET method
    const response = await fetch(webhookUrlWithParams, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('n8n webhook response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook error:', errorText);
      throw new Error(`n8n webhook returned status ${response.status}`);
    }

    const data = await response.json();
    console.log('n8n webhook response:', data);

    // Handle N8N array format: [{"output": "response"}]
    let botResponse = 'Message reçu !';
    
    if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0];
      botResponse = firstItem.output || firstItem.response || 
                    firstItem.message || firstItem.text || firstItem.reply || 
                    'Message reçu !';
      console.log('Extracted response from array:', botResponse);
    } else if (typeof data === 'object') {
      // Handle standard object format as fallback
      botResponse = data.output || data.response || data.message || 
                    data.text || data.reply || 'Message reçu !';
      console.log('Extracted response from object:', botResponse);
    }

    return new Response(
      JSON.stringify({ response: botResponse }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error in chat-webhook function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        response: 'Désolé, une erreur est survenue. Veuillez réessayer.'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
