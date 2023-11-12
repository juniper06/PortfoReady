package com.portfoready.server.exception;

public class InvalidPasswordException extends Exception{
    public InvalidPasswordException(){
        super("Invalid Password");
    }
}
