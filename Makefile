.PHONY: run
run:
	@docker run --name hosting \
	-v $(PWD)/hosting/html:/usr/share/nginx/html \
	-v $(PWD)/apps/react-esbuild/dist:/usr/share/nginx/html/js/esbuild \
	-v $(PWD)/apps/react-webpack/dist:/usr/share/nginx/html/js/webpack \
	-p 80:80 -d nginx

.PHONY: stop
stop:
	@docker stop hosting
	@docker rm hosting

.PHONY: rerun
rerun:
	@make stop
	@make run
