"""
Example: Using Groq API with Ibraahim
"""

import sys
import os

# Ensure we can import from src if running purely locally
sys.path.append(os.path.join(os.getcwd(), "src"))

from ibraahim.prompts import PromptTemplate
from ibraahim.providers import OpenAIProvider
from ibraahim.chains import LLMChain

def main():
    print("--- Ibraahim Groq Example ---")
    
    # 1. Get API Key
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        print("Skipping: GROQ_API_KEY not found in environment.")
        return

    # 2. Configure Provider for Groq
    # Groq is OpenAI-compatible, so we just check the base URL and model.
    llm = OpenAIProvider(
        model="llama-3.1-8b-instant",  # Updated to supported model
        base_url="https://api.groq.com/openai/v1",
        api_key=api_key
    )
    
    # 3. Define Prompt
    template = PromptTemplate(
        "Explain {concept} in one sentence."
    )
    
    # 4. Create Chain
    chain = LLMChain(prompt=template, llm=llm)
    
    # 5. Execute
    concept = "Quantum Computing"
    print(f"Asking Groq about: {concept}...")
    
    try:
        result = chain({"concept": concept})
        print(f"Groq Answer: {result['text']}")
        # print(f"Usage: {result['usage']}") # Usage not currently returned by LLMChain v1
    except Exception as e:
        print(f"Error calling Groq: {e}")

if __name__ == "__main__":
    main()
