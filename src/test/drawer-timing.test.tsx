import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ValuesAccordion from "@/components/about/ValuesAccordion";
import CultureValues from "@/components/careers/CultureValues";
import WhyRenda from "@/pages/WhyRenda";

vi.mock("@/hooks/use-fade-in", () => ({
  useFadeIn: () => ({ ref: null, isVisible: true }),
}));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("image drawer rotation", () => {
  it.each([
    { name: "The Company We Aim to Be", Component: ValuesAccordion },
    { name: "Culture & Values", Component: CultureValues },
    { name: "Signal Over Noise", Component: WhyRenda },
  ])("advances $name after 7 seconds, not sooner", ({ Component }) => {
    vi.useFakeTimers();
    render(<Component />);
    const drawers = screen.getAllByRole("button").filter((button) => button.hasAttribute("aria-expanded"));
    expect(drawers.length).toBeGreaterThan(1);
    expect(drawers[0]).toHaveAttribute("aria-expanded", "true");
    expect(drawers[1]).toHaveAttribute("aria-expanded", "false");
    act(() => vi.advanceTimersByTime(6999));
    expect(drawers[0]).toHaveAttribute("aria-expanded", "true");
    act(() => vi.advanceTimersByTime(1));
    expect(drawers[0]).toHaveAttribute("aria-expanded", "false");
    expect(drawers[1]).toHaveAttribute("aria-expanded", "true");
  });
});