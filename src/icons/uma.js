const Uma = {
  symbol: 'uma',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.29 13.037a.46.46 0 00-.46.46v5.137l.007.072c.033.16.176.275.34.275H13.6c.197 0 .347-.16.347-.347v-2.662l1.762 1.106c.15.094.338.094.488 0l1.772-1.106v2.662c0 .197.16.347.347.347h1.012a.33.33 0 00.328-.347v-5.137a.464.464 0 00-.722-.375l-2.793 1.922a.323.323 0 01-.385 0l-2.793-1.922a.411.411 0 00-.254-.085zM5.368 13H4.356a.354.354 0 00-.356.347v5.165l.007.083a.46.46 0 00.452.377h6.282a.46.46 0 00.459-.46v-5.165a.346.346 0 00-.347-.347H9.87a.346.346 0 00-.347.347v3.928H5.716v-3.928l-.008-.072a.346.346 0 00-.34-.275zm22.097 0h-6.282a.46.46 0 00-.459.46v5.165l.007.071a.347.347 0 00.34.276h1.012c.197 0 .347-.16.347-.347v-3.703l.008-.06a.229.229 0 01.217-.165h3.347l.06.008a.229.229 0 01.165.217v3.703l.007.071a.347.347 0 00.34.276h1.012l.069-.007a.347.347 0 00.269-.34v-5.166a.46.46 0 00-.46-.459zm-2.644 2.784h-1.003a.344.344 0 00-.347.338v1.031c0 .197.16.347.347.347h1.003c.197 0 .347-.16.347-.347v-1.022a.346.346 0 00-.347-.347z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle fill="#FF4A4A" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M19.328 18.981h-1.012a.346.346 0 01-.347-.347v-2.662l-1.772 1.106a.458.458 0 01-.488 0l-1.762-1.106v2.662c0 .188-.15.347-.347.347h-1.003a.346.346 0 01-.347-.347v-5.137a.46.46 0 01.46-.46c.093 0 .177.029.252.085l2.794 1.922a.323.323 0 00.385 0l2.793-1.922a.464.464 0 01.722.375v5.137a.33.33 0 01-.328.347zm-8.588-.009H4.46a.46.46 0 01-.46-.46v-5.165A.354.354 0 014.356 13H5.37c.187 0 .347.15.347.347v3.928h3.806v-3.928c0-.188.15-.347.347-.347h.984c.188 0 .347.15.347.347v5.166a.46.46 0 01-.46.459zM21.184 13h6.282a.46.46 0 01.459.46v5.165c0 .188-.15.347-.338.347h-1.012a.346.346 0 01-.347-.347v-3.703a.228.228 0 00-.225-.225h-3.347a.228.228 0 00-.225.225v3.703c0 .188-.15.347-.347.347h-1.012a.346.346 0 01-.347-.347v-5.166a.46.46 0 01.46-.459z"/><path d="M23.819 15.784h1.003c.187 0 .347.15.347.347v1.022c0 .188-.15.347-.347.347h-1.003a.346.346 0 01-.347-.347v-1.031c0-.188.16-.338.347-.338z"/></g></g>`;
  }
};
export default Uma;
