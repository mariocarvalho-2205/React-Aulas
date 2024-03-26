import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFetch, setCallFetch] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [id, setId] = useState(null);

	const httpConfig = (data, method) => {
		if (method === "POST") {
			setConfig({
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			setMethod(method);
		} else if (method === "DELETE") {
			setConfig({
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
			});
			setMethod(method);
			setId(data);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await fetch(url);

				const data = await res.json();

				setData(data);
			} catch (error) {
				setError("Houve um erro na requisição");
			}
			setLoading(false);
		};

		fetchData();
	}, [url, callFetch]);

	useEffect(() => {
		let data;
		const httpRequest = async () => {
			let fetchOptions = [url, config];
			if (method === "POST") {
				const res = await fetch(...fetchOptions);
				data = await res.json();
			} else if (method === "DELETE") {
				const deleteUrl = `${url}/${id}`;
				const res = await fetch(deleteUrl, config);
				data = await res.json();
			}
			setCallFetch(data);
		};
		httpRequest();
	}, [config, method, url]);

	return { data, httpConfig, loading, error };
};
