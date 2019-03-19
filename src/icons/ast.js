const Ast = {
  symbol: 'ast',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.01-26l-8.915 9.029L6 16.14l.385.34a17.624 17.624 0 0 0 1.233.991 14.27 14.27 0 0 0 4.033 2.012c1.41.45 2.88.671 4.359.671a14.5 14.5 0 0 0 3.471-.42 14.275 14.275 0 0 0 4.596-2.042c.345-.23.69-.49 1.016-.751.187-.15.365-.3.532-.46l.375-.34zm8.738 10.47c-.313.258-.639.499-.977.721a13.826 13.826 0 0 1-4.418 1.962 13.962 13.962 0 0 1-3.343.41 13.747 13.747 0 0 1-8.067-2.582c-.316-.22-.621-.47-.927-.72l-.187-.161L16 6.81l9.172 9.29c-.129.13-.276.25-.424.37zm-15.03-.48l-.444.19h.543c2.962 0 5.866.831 8.392 2.402l.03.02.04-.01c1.65-.3 3.227-.922 4.644-1.831l.139-.09-.139-.08a13.933 13.933 0 0 0-7.07-1.922c-2.113.01-4.2.46-6.135 1.32zm8.639 2.002a16.18 16.18 0 0 0-6.272-2.232 14.002 14.002 0 0 1 3.757-.51c2.11 0 4.182.49 6.065 1.451a11.735 11.735 0 0 1-3.55 1.291zm3.304 1.972s-1.46.92-2.012 1.191a13.757 13.757 0 0 1-5.986 1.792l-.631.04L16.01 26l4.23-4.284a23.88 23.88 0 0 0 1.42-1.752zm-7.347 3.504a14.239 14.239 0 0 0 4.694-1.322L16.01 25.19z" fill-rule="evenodd" />`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0061ff" r="16"/><path d="M16.01 6L26 16.14l-.375.34a7.99 7.99 0 0 1-.532.46c-.326.261-.67.521-1.016.752a14.275 14.275 0 0 1-4.596 2.042c-1.136.28-2.302.42-3.471.42-1.48 0-2.95-.22-4.36-.67a14.27 14.27 0 0 1-4.033-2.013 17.925 17.925 0 0 1-1.232-.99L6 16.14l1.095-1.112zm8.738 10.47c.148-.12.295-.24.424-.37L16 6.81 6.829 16.1l.187.16c.306.25.611.5.927.72a13.747 13.747 0 0 0 8.067 2.583 13.962 13.962 0 0 0 3.343-.41 13.826 13.826 0 0 0 4.418-1.962c.338-.222.664-.463.977-.72zm-15.03-.48a15.263 15.263 0 0 1 6.134-1.321c2.486 0 4.931.66 7.071 1.922l.139.08-.139.09a12.883 12.883 0 0 1-4.645 1.832l-.039.01-.03-.02a15.887 15.887 0 0 0-8.393-2.403h-.542zm8.639 2.002c1.252-.24 2.446-.67 3.55-1.291a13.312 13.312 0 0 0-6.065-1.452c-1.27 0-2.533.17-3.757.51 2.22.3 4.354 1.06 6.272 2.233zm3.304 1.972a23.88 23.88 0 0 1-1.42 1.752L16.01 26l-2.978-3.013.63-.04a13.766 13.766 0 0 0 5.987-1.792c.552-.27 2.012-1.191 2.012-1.191zm-7.347 3.504l1.696 1.721 2.998-3.043a14.252 14.252 0 0 1-4.694 1.322z" fill="#fff" fill-rule="nonzero"/></g>`;
  }
};
export default Ast;