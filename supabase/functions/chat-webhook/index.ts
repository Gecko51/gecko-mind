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

    // Call n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp,
      }),
    });

    console.log('n8n webhook response status:', response.status);

    if (!response.ok) {
      throw new Error(`n8n webhook returned status ${response.status}`);
    }

    const data = await response.json();
    console.log('n8n webhook response:', data);

    return new Response(
      JSON.stringify(data),
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
