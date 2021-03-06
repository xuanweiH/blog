
// 有7瓶水,其中1瓶有毒
// 小白鼠只要尝一点带毒的水24小时后就会死亡，
// 要多少只老鼠才能24小时内测出有毒的那一瓶呢

// 答案 3只
// 解法: 

// 001 第一瓶,010 第二瓶,011 第三瓶,100 第四瓶,101 第五瓶,110 第六瓶,111 第七瓶

// 100 101 110 111
// 将3位2进制数第一位为1的瓶子中取出1滴放在一起分给老鼠A，即4，5，6，7瓶

// 010 011 110 111
// 将3位2进制数第二位为1的瓶子中取出1滴放在一起分给老鼠B，即2，3，6，7瓶

// 001 011 101 111
// 将3位2进制数最后三位二进制为1的瓶子中取出1滴放在一起分给老鼠C，即1，3，5，7瓶

// 然后等24小时,按ABC顺序给死了的老鼠标号为1，没死的为0这个2进制的十进制数就是有毒的瓶子标号

// 例如第三瓶有毒:则BC老鼠会死，为011=3

// 第一次看到这个方法感觉很神奇...在网上找了下,这种思想有个算法叫Bloom Filter算法.