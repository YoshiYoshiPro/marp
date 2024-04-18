new:
	./scripts/new.sh

# 画像のリサイズ
IMAGES_DIR = src/$(PROJECT)/images

resize:
	@echo "Resizing images in $(IMAGES_DIR)"
	@for img in $(wildcard $(IMAGES_DIR)/*.*); do \
		node scripts/imageProcessor.js $$img $$img; \
	done

.PHONY: resize
