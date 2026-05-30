function addAssistantButton() {
  if (document.getElementById("ai-reply-button")) return;

  const button = document.createElement("button");
  button.id = "ai-reply-button";
  button.innerText = "AI Yanıt Öner";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = "9999";
  button.style.padding = "10px";
  button.style.backgroundColor = "#1a73e8";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "6px";

  document.body.appendChild(button);
}

addAssistantButton();