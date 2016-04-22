BUILD_DIR := ./build
ANSIBLE_DIR := ./ansible
ANSIBLE_INVENTORY := ~/.ansible-inventory


install:
	npm install


# Deploy tasks
staging: build git-staging deploy
	@ git tag -f staging
	@ echo "Staging deploy complete"

prod: build git-prod deploy
	@ git tag -f production
	@ echo "Production deploy complete"


# Build tasks

build: clean
	npm run build



# Sub-tasks

clean:
	@ rm -rf $(BUILD_DIR)

git-prod:
	@ cd $(BUILD_DIR) && \
	git init && \
	git remote add origin $(PROD_REPO)

git-staging:
	@ cd $(BUILD_DIR) && \
	git init && \
	git remote add origin $(STAGING_REPO)

deploy:
	@ cd $(ANSIBLE_DIR) && \
	ansible-galaxy -f install -r ./requirements.yml -p ./roles && \
	ansible-playbook -i $(ANSIBLE_INVENTORY) ./main.yml

.PHONY: install build clean deploy git-prod git-staging prod staging