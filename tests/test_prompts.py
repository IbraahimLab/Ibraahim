import unittest
from ibraahim.prompts import PromptTemplate
from ibraahim.core.exceptions import TemplateError

class TestPromptTemplate(unittest.TestCase):
    
    def test_variable_extraction(self):
        template = PromptTemplate("Hello {name}, welcome to {place}")
        self.assertEqual(template.input_variables, {"name", "place"})
        
    def test_formatting(self):
        template = PromptTemplate("Hello {name}")
        result = template.format(name="World")
        self.assertEqual(result, "Hello World")
        
    def test_missing_variable_error(self):
        template = PromptTemplate("Hello {name}")
        with self.assertRaises(TemplateError):
            template.format()
            
    def test_extra_variable_ignored(self):
        # NOTE: standard python format ignores extra kwargs? 
        # Actually standard format does NOT ignore extra args if they are not used?
        # Wait, "str".format(a=1, b=2) where string is "{a}" -> "1". It DOES work.
        template = PromptTemplate("Hello {name}")
        result = template.format(name="World", extra="stuff")
        self.assertEqual(result, "Hello World")

if __name__ == "__main__":
    unittest.main()
