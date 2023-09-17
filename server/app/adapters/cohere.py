import cohere


class CohereClient:
    def __init__(self, api_key):
        self.client = cohere.AsyncClient(api_key)

    async def generate_latex(self, raw_speech):
        response = await self.client.generate(
            prompt=f"You are being used to translate the raw speech of a math equation into valid LaTeX code. You are guaranteed that this raw speech is a math equation. Please convert it into a valid LaTeX equation. Do not try and make it text. All we need from you is the raw INLINE LaTeX code - we will take care of adding the proper delimeters (so don't add any dollar signs). Please do not add any extra terms, or add any extra text, or else your output will be unusable for us. You are not speaking to us, you are simply outputting LaTeX code, so no intro should be given. The raw speech data is this: {raw_speech}",
            max_tokens=25,
        )
        print(response)
        return response
