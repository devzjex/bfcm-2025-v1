class AppsController {
  constructor() {
    this.tabButtons = Array.from(document.querySelectorAll('.tab-button'));
    this.cards = Array.from(document.querySelectorAll('.app-card'));
    this.activeCategory = null;

    this.bindTabEvents();
    this.bindCopyButtons();

    const defaultCategory = this.getDefaultCategory();
    if (defaultCategory) {
      this.setActiveButton(defaultCategory);
      this.showCategory(defaultCategory, false);
    }
  }

  getDefaultCategory() {
    const activeButton = this.tabButtons.find((button) => button.classList.contains('active'));
    return (
      activeButton?.dataset.category ||
      this.tabButtons[0]?.dataset.category ||
      this.cards[0]?.dataset.category ||
      null
    );
  }

  bindTabEvents() {
    this.tabButtons.forEach((button) => {
      const category = button.dataset.category || button.textContent.trim();
      button.addEventListener('click', () => {
        if (category === this.activeCategory) {
          return;
        }

        this.setActiveButton(category);
        this.showCategory(category, true);
      });
    });
  }

  setActiveButton(category) {
    this.tabButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.category === category);
    });
  }

  showCategory(category, animate) {
    this.activeCategory = category;
    let animationIndex = 0;

    this.cards.forEach((card) => {
      const matches = card.dataset.category === category;

      if (matches) {
        card.classList.remove('is-hidden');

        if (animate) {
          this.animateCard(card, animationIndex);
          animationIndex += 1;
        } else {
          card.style.transition = '';
          card.style.transitionDelay = '';
          card.style.opacity = '';
          card.style.transform = '';
        }
      } else {
        card.classList.add('is-hidden');
        card.style.transition = '';
        card.style.transitionDelay = '';
        card.style.opacity = '';
        card.style.transform = '';
      }
    });
  }

  animateCard(card, index) {
    card.style.transition = 'none';
    card.style.transitionDelay = '';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  }

  bindCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach((button) => {
      const promoCode = button.dataset.promoCode || button.dataset.promo || button.value;
      if (!promoCode) {
        return;
      }

      button.addEventListener('click', () => {
        this.copyPromoCode(button, promoCode);
      });
    });
  }

  copyPromoCode(button, promoCode) {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(promoCode)
        .then(() => this.showCopySuccess(button))
        .catch(() => this.showCopyError(button));
      return;
    }

    try {
      const tempInput = document.createElement('input');
      tempInput.value = promoCode;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      tempInput.remove();
      this.showCopySuccess(button);
    } catch (error) {
      this.showCopyError(button);
    }
  }

  showCopySuccess(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '✓';
    button.style.background = '#4CAF50';
    button.style.color = 'white';
    button.style.borderRadius = '50%';
    button.style.transform = 'scale(1.2)';

    setTimeout(() => {
      button.innerHTML = originalContent;
      button.style.background = 'transparent';
      button.style.color = '';
      button.style.borderRadius = '';
      button.style.transform = 'scale(1)';
    }, 2000);
  }

  showCopyError(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '×';
    button.style.background = '#f44336';
    button.style.color = 'white';
    button.style.borderRadius = '50%';

    setTimeout(() => {
      button.innerHTML = originalContent;
      button.style.background = 'transparent';
      button.style.color = '';
      button.style.borderRadius = '';
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AppsController();
});
