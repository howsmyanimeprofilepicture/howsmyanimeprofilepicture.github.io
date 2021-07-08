## 1. 모든 필드는 Resolver를 가진다.

- GraphQL의 스키마에 있는 모든 필드는 Resolver를 가진다.
- 오브젝트 타입의 필드도, 쿼리 타입의 필드도, 뮤테이션 타입의 필드도 모두 해당된다.

- 특정 필드의 Resolver를 Resolver Map에 따로 명시하지 않았다면 **Default Resolver**가 자동으로 적용되기 때문이다.

- 그러니까 모든 필드는 각자의 Resolver를 가진다고 이해하는 것이 타당하다. *(Default Resolver도 Resolver니까)*

  ```jsx
  {	// Default Resolver는 이러한 로직으로 그릴 수 있다.
      "filedname" : (parent) => parent.fieldName,
  } 
  ```

  ![image](https://user-images.githubusercontent.com/75282888/119288334-4d62f280-bc83-11eb-937f-fcfbd7c45cf8.png)

- Default Resolver는 (parent) => parent.filedName(혹은 Resolver Name)이라고 했는데, 여기서 parent가 무엇일까?

- Resolver 함수의 parent인자는 **Resolver Chain**상 **바로 직전의 Resolver의 리턴값**이다. 



## 2. Resolver Chaining의 이해

![image](https://user-images.githubusercontent.com/75282888/119285347-cd398e80-bc7c-11eb-9864-8886df47c99a.png)



![image](https://user-images.githubusercontent.com/75282888/119382197-acb11900-bcfc-11eb-99e2-4bec375937f4.png)

- 어떠한 쿼리(혹은 뮤테이션)가 클라이언트로부터 요청되면 서버에서는 **해당 쿼리에 대한 Resolver함수**가 호출된다. 이후 해당 함수의 호출이 종료되면,
- **해당 쿼리가 반환하는 타입**(Object Type)**의 각각의 필드에 대한 Resolver가 실행**된다. (앞서 말했듯 Resolver가 명시되지 않았다면 DefaultResolver가 실행된다.) 그리고 다시 각각의 필드에 대한 Resolver의 호출이 종료되면,
- 또 다시 각각의 필드가 갖는 타입의 각각의 필드(위 그림을 보면 이해 쉬움)에 대한 Resolver가 실행된다.
- 결국 scalar 타입(String이나 Int같은)의 필드가 나올 때까지, (nested가 끝나는 곳까지) 이러한 **Resolver Chaining**은 이어진다.
- Resolver 함수의 **parent**인자는 Resolver Chaining 과정에서 **바로 직전의 Resolver의 리턴값**이다.
- 만약 상위 Resolver에서 객체안으로 nested되는 값까지 모두 작성해서 리턴했다면, 굳이 Resolver를 따로 작성할 필요가 없을 것이다. Default Resolver가 자동으로 **parent[해당필드이름]** 으로 값을 가져올테니까
