"""
Example: Basic Usage of Ibraahim Framework
"""

import sys
import os

# Ensure we can import from src if running purely locally
sys.path.append(os.path.join(os.getcwd(), "src"))

from ibraahim.prompts import PromptTemplate
from ibraahim.providers import MockLLM
from ibraahim.chains import LLMChain

def main():
    print("--- Ibraahim Basic Example ---")
    
    # 1. Define what you want to say (Prompt)
    template = PromptTemplate(
        "You are a helpful assistant. Translate '{text}' to {language}."
    )
    
    # 2. Define who says it (Provider)
    # in a real app, you would use OpenAIProvider(api_key="...")
    llm = MockLLM(response="Hola Mundo") 
    
    # 3. Create the Link (Chain)
    chain = LLMChain(prompt=template, llm=llm)
    
    # 4. Execute
    user_input = {
        "text": "Hello World",
        "language": "Spanish"
    }
    
    print(f"Input: {user_input}")
    result = chain(user_input)
    
    print(f"Output: {result['text']}")
    print("------------------------------")

if __name__ == "__main__":
    main()
