TypeScript Enums



Topic
1. Numeric Enum - Default
2. Numeric Enum - Initiaized
3. Numeric Enum - Fully Initialized
4. String Enums





Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:

enum myEnum { 
  myFirstConst, 
  mySecondConst
};




Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with the string values "first" and "second":


enum myEnum {
  myFirstConst = "first",
  mySecondConst = "second"
};