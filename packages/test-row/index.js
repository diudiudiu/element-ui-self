import TestRow from './src/test-row';

/* istanbul ignore next */
TestRow.install = function(Vue) {
  Vue.component(TestRow.name, TestRow);
};

console.error(TestRow.name);

export default TestRow;

