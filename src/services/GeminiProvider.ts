import { AIProvider } from "./AIProvider";

export class GeminiProvider implements AIProvider {
  async generateReply(prompt: string): Promise<string> {
    return "Gemini response: " + prompt;
  }
}
