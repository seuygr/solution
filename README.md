# Code challenge
## 背景介绍
定期付款（或定期转账）是检查用户账户信息的一个重要标准。发现账户中的定期付款可以更加具体地了解到用户的消费方式，
并且还能及时发现那些用户原本不需要的服务项目，帮助用户理财。此次的项目目标就是创建一个后端App，能够快速准确地确认用户账户中的定期付款项。

## 项目要求
你的任务是写一个Node.js的app，这个app能够接受交易信息，将它们存入数据库中，并发现其中的顶起付款项。你应该能够在API的返回中得到目前更新的全部定期付款项。
你需要实现以下两个API：
### 存入交易信息
输入：一个交易信息的列表（list），并将它们存入数据库。一个array包含了以下参数：trans_id (String)， user_id (String),
name (String), amount (Number), date (Date)。   
输出：所有最近的定期付款项，并按name的字母顺序排序。返回一个array包含以下参数：name, user_id, next_amt (预计下次付款金额), 
next_date（预计下次付款时间）, transactions（当前name下的所有转账信息）

### 获取定期付款项
无输入， 返回类型同上。

## 其他要求
这个API需要监听本地的1984端口（使用Express），分别使用POST和GET；如果这个app的运行时间超过10秒，则返回一个超时信息（报错）；使用MongoDB存储信息，
使用其默认的27017端口，可以存入任何信息。   

注意：重复付款项的定义为，在固定时间间隔下的相似付款金额，即同一公司名下的定期付款项都有固定的时间间隔，但每次付款的金额可能会有变化，但变化不大。同时
相同公司下的各转账项目一定包括公司名，但其后的流水号可能会有差别，例如：爱奇艺 102XG23 和 爱奇艺 131FF21。重复转账的金额可能为正也可能为负。

### input sample
![img](https://github.com/seuygr/solution/blob/master/image/%E8%BE%93%E5%85%A5%E5%BC%8F%E6%A0%B7.png)

### output sample
![img](https://github.com/seuygr/solution/blob/master/image/%E8%BE%93%E5%87%BA%E5%BC%8F%E6%A0%B7.png)
