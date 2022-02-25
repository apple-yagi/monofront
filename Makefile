.PHONY: run
run:
	docker run --name hosting -v $(PWD)/hosting/html:/usr/share/nginx/html -p 80:80 -d nginx
