import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./counter";
import { expect, it } from "vitest";

it("begins in 0, on click, sums 1", ()=>{
    render(<Contador/>)
    expect(screen.getByText("Cuenta: 0")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Sumar"))
    expect(screen.getByText("Cuenta: 1")).toBeInTheDocument()
})