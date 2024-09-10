import { http, HttpResponse } from 'msw';

export const handlers = [
	http.post("/api/code/NAT/:code", () => {
			return HttpResponse.json({
			"data": [
				{"CODE": "11", "DESCR": "UNIT1"},
				{"CODE": "22", "DESCR": "UNIT2"}
			]
		});
	}),

]
