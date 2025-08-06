import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiClient = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeCode(code) {

    const prompt = `     
    
    Analyze the following code and provide suggestions for improvement:
    ${code}
    
    Please review the following:

    1. Possible bugs or errors
    2. Performance improvements
    3. Code best practices
    4.Readability and maintainability
    5. Specific optimization suggestions

    IMPORTANT:

    - Format your response using markdown
    - Use code formatting for code snippets
    - Use bold to highlight important points
    - Use - for lists
    - Be clear and straightforward in English

    RESPONSE FORMAT:

    - Use plain paragraphs only. 
    - Be concise. Return only:

    ❌ MAIN ISSUE:
    ✅ QUICK FIX:
      
    - Maximum of 3 sentences. Straight to the point.
    - No need introductions.  

    `;

    try {
        
        const model = geminiClient.getGenerativeModel({ model: "gemini-1.5-flash" })
        
        const result = await model.generateContent(prompt)

        const response = await result.response; 
        
        return response.text();
        
    } catch (error) {
        console.error("Failed to analyze code:", error);
        throw new Error("Error connecting to the AI. Please check your API key and try again.");
    }
}