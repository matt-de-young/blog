import type { ComponentChildren } from "preact";

export interface CalloutProps {
  type?: "question" | "important" | "note" | "warning";
  children: ComponentChildren;
}

export function Callout({ type = "note", children }: CalloutProps) {
  const styles = {
    question: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      icon: "💡",
      title: "Question",
      titleColor: "text-blue-900",
    },
    important: {
      bg: "bg-red-50",
      border: "border-red-300",
      icon: "⚠️",
      title: "Important",
      titleColor: "text-red-900",
    },
    note: {
      bg: "bg-slate-50",
      border: "border-slate-300",
      icon: "📝",
      title: "Note",
      titleColor: "text-slate-900",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      icon: "⚡",
      title: "Warning",
      titleColor: "text-yellow-900",
    },
  };

  const style = styles[type];

  return (
    <div
      class={`${style.bg} ${style.border} border-2 p-6 my-6 rounded-lg`}
    >
      <div class="flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">{style.icon}</span>
        <div class="flex-1">
          <div class="text-slate-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
