function versionSort(versions, isDesc = false) {
    return versions.sort((a, b) => {
      const v1 = a.split('.').map(Number);
      const v2 = b.split('.').map(Number);
      const maxLen = Math.max(v1.length, v2.length);
      
      for (let i = 0; i < maxLen; i++) {
        const num1 = v1[i] || 0; // 处理长度不足的情况
        const num2 = v2[i] || 0;
        if (num1 !== num2) {
          return isDesc ? num2 - num1 : num1 - num2;
        }
      }
      return 0; // 完全相等的情况
    });
  }
  
  // 示例用法
  const versions = ["1.5", "1.45", "5.1", "1.2.3", "2.6"];
  console.log(versionSort(versions)); 
  // 输出: ["1.2.3", "1.5", "1.45", "2.6", "5.1"]
  console.log(versionSort(versions, true)); 
  // 输出: ["5.1", "2.6", "1.45", "1.5", "1.2.3"]
  