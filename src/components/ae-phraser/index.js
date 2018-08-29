import AePhraser from './ae-phraser.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-phraser', AePhraser);
};

export default AePhraser;
