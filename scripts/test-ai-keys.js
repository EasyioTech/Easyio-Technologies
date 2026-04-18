
async function testGemini() {
  console.log('\n--- Testing Gemini ---');
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { console.log('❌ GEMINI_API_KEY missing'); return; }
  
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: 'Say "Gemini is online"' }] }]
      })
    });
    const data = await response.json();
    if (data.candidates) {
      console.log('✅ Gemini OK:', data.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ Gemini Failed:', JSON.stringify(data));
    }
  } catch (e) { console.log('❌ Gemini Error:', e.message); }
}

async function testGroq() {
  console.log('\n--- Testing Groq ---');
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) { console.log('❌ GROQ_API_KEY missing'); return; }
  
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: 'Say "Groq is online"' }]
      })
    });
    const data = await response.json();
    if (data.choices) {
      console.log('✅ Groq OK:', data.choices[0].message.content);
    } else {
      console.log('❌ Groq Failed:', JSON.stringify(data));
    }
  } catch (e) { console.log('❌ Groq Error:', e.message); }
}

async function testSambaNova() {
  console.log('\n--- Testing SambaNova ---');
  const apiKey = process.env.SAMBANOVA_API_KEY;
  if (!apiKey) { console.log('❌ SAMBANOVA_API_KEY missing'); return; }
  
  try {
    const response = await fetch('https://api.sambanova.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'Meta-Llama-3.3-70B-Instruct',
        messages: [{ role: 'user', content: 'Say "SambaNova is online"' }]
      })
    });
    const data = await response.text();
    try {
      const json = JSON.parse(data);
      if (json.choices) {
        console.log('✅ SambaNova OK:', json.choices[0].message.content);
      } else {
        console.log('❌ SambaNova Failed:', data);
      }
    } catch (e) {
      console.log('❌ SambaNova Parse Error:', e.message);
      console.log('📄 Raw Response:', data);
    }
  } catch (e) {
    console.log('❌ SambaNova Fetch Error:', e.message);
  }
}

async function testCerebras() {
  console.log('\n--- Testing Cerebras ---');
  const apiKey = process.env.CEREBRAS_API_KEY;
  if (!apiKey) { console.log('❌ CEREBRAS_API_KEY missing'); return; }
  
  try {
    const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.1-8b',
        messages: [{ role: 'user', content: 'Say "Cerebras is online"' }]
      })
    });
    const data = await response.json();
    if (data.choices) {
      console.log('✅ Cerebras OK:', data.choices[0].message.content);
    } else {
      console.log('❌ Cerebras Failed:', JSON.stringify(data));
    }
  } catch (e) { console.log('❌ Cerebras Error:', e.message); }
}

async function runTests() {
  console.log('🚀 Starting AI Provider Verification...');
  await testGemini();
  await testGroq();
  await testSambaNova();
  await testCerebras();
  console.log('\n🏁 Verification Complete.');
}

runTests();
