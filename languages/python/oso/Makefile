.PHONY: build test test-requirements fmt
build:
	rm -rf build
	python setup.py build
	python setup.py develop

test-requirements: .make.test-requirements-install

.make.test-requirements-install: requirements-test.txt
	pip install pytest
	pip install -r requirements-test.txt
	touch $@

test: test-requirements
	pytest tests
	pytest oso

fmt:
	black .

package:
	python setup.py sdist bdist_wheel

repl:
	python -m oso

