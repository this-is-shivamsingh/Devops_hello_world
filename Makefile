hello:
	echo "hello World";

up:
	docker compose --env-file ./env/.env.development up

up-deattached:
	docker compose --env-file ./env/.env.development up -d

down:
	docker compose --env-file ./env/.env.development down
