class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
  
    static publicStaticMethod() {
      ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
    }
  }
  
console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);