hello:
	echo "hello World";

build:
	docker compose -f dev-docker-compose.yml --env-file ./env/.env.development build

prod-build:
	docker compose --env-file ./env/.env.production build

up:
	docker compose -f dev-docker-compose.yml --env-file ./env/.env.development up

up-prod:
	docker compose --env-file ./env/.env.production up

up-deattached:
	docker compose --env-file ./env/.env.development up -d

down:
	docker compose -f dev-docker-compose.yml --env-file ./env/.env.development down

down-prod:
	docker compose --env-file ./env/.env.production down
