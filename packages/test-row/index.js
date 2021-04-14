import TestRow from './test-row/test-row';

/* istanbul ignore next */
TestRow.install = function(Vue) {
  Vue.component(TestRow.name, TestRow);
};

export default TestRow;

