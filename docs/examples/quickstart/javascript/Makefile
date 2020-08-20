.PHONY: wasm install clean dev build fmtcheck typecheck lint test

install:
	yarn install

clean:
	yarn clean

dev:
	yarn tsc --project tsconfig.build.json --watch

build:
	yarn tsc --project tsconfig.build.json

fmtcheck: install
	yarn fmtcheck

typecheck: install
	yarn tsc

lint: fmtcheck typecheck

parity: install
	yarn ts-node test/parity.ts

test: install
	yarn test
