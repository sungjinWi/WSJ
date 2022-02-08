// 2/07 3번째

#include <iostream>
#include <set>
#include <string>

using namespace std;

template <typename T, typename C>
void PrintSetElement(set<T, C>& s)
{
    for (const auto& ele : s)
    {
        cout << ele << " " << endl;
    }
}

class Todo
{
private: // 안써도 default가 private
    int priority; 
    string jobDesc;

public:
    Todo(int nPriority, string strJobDesc)
        : priority(nPriority), jobDesc(strJobDesc)
    {
    }

#if 0
    //typename C 없을 때
    bool operator<(const Todo& t) const // operator 재정의 없으면 error 
    {
        if (priority == t.priority)
        {
            return jobDesc < t.jobDesc;
        }

        return priority > t.priority;
    }
#endif

    friend class TodoCmp;

    friend ostream& operator<<(ostream& o, const Todo& td); // operator때만 쓴다 ostream은 출력 stream
};

class TodoCmp
{
public:
    bool operator()(const Todo& t1, const Todo& t2) const
    {
        if (t1.priority == t2.priority)
        {
            return (t1.jobDesc < t2.jobDesc);
        }
        return (t1.priority > t2.priority);

    }
};

ostream& operator<<(ostream& o, const Todo& td)
{
    o << "[Priority : " << td.priority << "]" << td.jobDesc;
    return o;
}
int main()
{
    //set<Todo> todos; //if 0
    set<Todo, TodoCmp> todos;

    todos.insert(Todo(1, "Exercise C++"));
    todos.insert(Todo(2, "Exercise math"));
    todos.insert(Todo(1, "Programming Project"));
    todos.insert(Todo(3, "Meet friends"));
    todos.insert(Todo(2, "Overwatch"));

    PrintSetElement(todos);

    cout << "======================" << endl;
    cout << "if you complete exercise math" << endl;
    todos.erase(todos.find(Todo(2, "Exercise math")));

    PrintSetElement(todos);
    
    return 0;
}
