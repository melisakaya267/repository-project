import { AIProvider } from "./AIProvider";

export class AIService {
  constructor(private provider: AIProvider) {}

  async generateReply(prompt: string): Promise<string> {
    return this.provider.generateReply(prompt);
  }
}
