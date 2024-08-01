NODE := "docker compose exec node"
PNPM := NODE + " pnpm"

dev *args:
	{{PNPM}} dev {{args}}

pnpm *args:
	{{PNPM}} {{args}}

ncu:
	{{NODE}} ncu -iu

shell:
	docker compose exec -it node bash
