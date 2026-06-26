import { useState } from "react";
import { SendBtn } from "../Components/Atoms/SendBtn";
import { useAuth } from "../Hooks/useAuth";

    function LoginForm() {
	const { login } = useAuth();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
			// aquí, tras loguear, navegarás al área privada (lo cerramos en la próxima clase)
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 p-6">
			<input
				name="email"
				type="email"
				value={data.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
				className="rounded border px-3 py-2"
			/>
			<input
				name="password"
				type="password"
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
				className="rounded border px-3 py-2"
			/>
			{error && <p className="text-red-600">{error}</p>}
			<SendBtn disabled={isLoading} className="rounded bg-blue-600 py-2 text-white disabled:opacity-50">
				{isLoading ? "Entrando…" : "Entrar"}
			</SendBtn>
		</form>
	);
}
export{
    LoginForm
}