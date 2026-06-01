import { AIProvider } from "./AIProvider";

export class OpenAIProvider implements AIProvider {
  async generateReply(prompt: string): Promise<string> {
    return "OpenAI response: " + prompt;
  }
}
