#include<stdio.h>
#include<cs50.h>
#include<string.h>

void spellName(string);

int main(void)
{
    string name = get_string("What is your name? ");
    int age = get_int("What is your age? ");
    
    printf("Hello %s!\n", name);
    spellName(name);
    
//     if(age < 18) 
//     {
//         printf("You are not legal! Leave!\n");
//     }
//     else if(age < 35) 
//     {
//         printf("You are a millenial snowflake.\n");
//     }
//     else if(age < 65) 
//     {
//         printf("what a boomer.\n");
//     }
//     else if(age >= 65) 
//     {
//         printf("The end is near!\n");
//     }
}

void spellName(string name)
{
    for (int letter = strlen(name) - 1; letter >= 0; letter--)
    {
        printf("%c\n", name[letter]);
    }
}
