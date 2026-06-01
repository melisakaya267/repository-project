export interface AIProvider {
  generateReply(prompt: string): Promise<string>;
}
