import unittest
from ibraahim.chains import LLMChain, SequentialChain
from ibraahim.prompts import PromptTemplate
from ibraahim.providers import MockLLM
from ibraahim.core.exceptions import ConfigurationError

class TestChains(unittest.TestCase):
    
    def setUp(self):
        self.mock_llm = MockLLM(response="Test Response")
    
    def test_llm_chain(self):
        prompt = PromptTemplate("Say {message}")
        chain = LLMChain(prompt=prompt, llm=self.mock_llm, output_key="result")
        
        output = chain({"message": "Hello"})
        self.assertEqual(output["result"], "Test Response")
        
    def test_sequential_chain(self):
        # Chain 1: takes 'topic' -> produces 'title'
        prompt1 = PromptTemplate("Write a title about {topic}")
        llm1 = MockLLM("The Great Gatsby")
        chain1 = LLMChain(prompt=prompt1, llm=llm1, output_key="title")
        
        # Chain 2: takes 'title' -> produces 'summary'
        prompt2 = PromptTemplate("Summarize {title}")
        llm2 = MockLLM("A story about rich people.")
        chain2 = LLMChain(prompt=prompt2, llm=llm2, output_key="summary")
        
        seq_chain = SequentialChain(
            chains=[chain1, chain2],
            input_variables=["topic"],
            output_variables=["summary"]
        )
        
        result = seq_chain({"topic": "Books"})
        self.assertEqual(result["summary"], "A story about rich people.")

    def test_sequential_chain_validation_error(self):
        prompt1 = PromptTemplate("Need {missing}")
        chain1 = LLMChain(prompt=prompt1, llm=self.mock_llm)
        
        with self.assertRaises(ConfigurationError):
            SequentialChain(
                chains=[chain1],
                input_variables=["exists"], # 'missing' is missing
                output_variables=["out"]
            )

if __name__ == "__main__":
    unittest.main()
