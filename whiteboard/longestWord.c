#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(void)
{
    char str[] = "The quick brown fox jumped over the lazy dog";
    //     printf("%s\n", str);
    //     printf("%lu\n", strlen(str));

    // Returns first token
    char *token = strtok(str, " ");

    // Keep printing tokens while one of the
    // delimiters present in str[].
    while (token != NULL)
    {
        //         printf("%s\n", token);
        printf("%lu\n", strlen(token));
        token = strtok(NULL, " ");
    }
}

// Return the length of the longest word in the provided sentence.

// Your response should be a number.
