/**
 * Execution Context (엑시큐션 컨텍스트)
 *
 * Execution Context는 실행하려는 JS 코드와 코드를 실행할때 필요한 정보를 담고있는 특수한 환경이다.
 * 코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면된다.
 *
 * Execution Context는 두가지 타입으로 나뉜다
 *
 * 1. Global Context(글로벌 컨텍스트)
 * 최상위 Execution Context다 코드를 실행하면 무조건 생성되는 context로 웹에서의 window 객체나 nodeJS에서의 global 객체를 생성하고 들고있는다.
 *
 * 2. Function Context (펑션 컨텍스트)
 * 함수가 실행될때마다 함수별로 실행되는 context다. 함수 실행에대한 모든 정보를 갖고있는다.
 *
 *
 */

const one = () => {
  console.log("run one");
  console.log("run one finished");
};
const two = () => {
  console.log("run two");
  one();
  console.log("run two finished");
};
const three = () => {
  console.log("run three");
  two();
  console.log("run three finished");
};
three();

/**
 * run three
 * run two
 * run one
 * run one finished
 * run two finished
 * run three finished
 */

/**
 * Execution Context Stack
 *
 * Creation Phase (크리에이션 페이즈)
 *
 * Global Object를 생성한다. window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
 * this를 window 또는 global에 바인딩한다.
 * 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다. (호이스팅 현상이 일어나는 원인)
 *
 *
 * Execution Phase (익스큐션 페이즈)
 *
 * 코드를 실행한다.
 * 필요하다면 새로운 Execution Context를 생성한다.
 */
