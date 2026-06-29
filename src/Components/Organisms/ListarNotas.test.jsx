import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import ListaNotas from "./ListarNotas";

beforeEach(()=>{
    vi.stubGlobal("fetch", vi.fn())
})

afterEach(()=>{
    vi.unstubAllGlobals
})

it("pinta las notas que devuelve la api", async()=>{
    fetch.mockResolvedValue({
        ok: true,
        json: async () =>[
            {_id:"1", titulo: "comprar pan"},
            {_id:"2", titulo: "vender pan"}
        ]
    })
    render(<ListaNotas/>)

    expect(screen.getByText("Cargando notas…")).toBeInTheDocument()

    expect(await screen.findByText("comprar pan")).toBeInTheDocument()
    
    expect(await screen.findByText("vender pan")).toBeInTheDocument()
})

it("shows message if API fails", async()=>{
    fetch.mockResolvedValue({
        ok: false,
        status:500
    })

    render(<ListaNotas/>)
    expect(await screen.findByText(/error/i)).toBeInTheDocument()
})