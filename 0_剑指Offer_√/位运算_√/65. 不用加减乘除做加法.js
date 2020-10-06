const add=(a,b)=>{
      while(b != 0) {
          let carry = (a & b) << 1;
          let n = a ^ b;
          a = n;
          b = carry;
      }
      return a;
  }
