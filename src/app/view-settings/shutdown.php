<?php
/*
* Author: Louis Scheepers
* Student Nr: 26368676
*
* This Script takes input with a command either being restart or shutdown
*
* isset($_GET[]) checks to see if input for a command is available
*/
    if(isset($_GET['command'])){
/*
* if input is available save the input into the $input variable
*/
        $input = $_GET['command'];
    }else{
/*
*  If no input or the wrong input is recieved (No Command Input) Kill the script (You can replace die() with any other functionality when no input is recieved but for now it just kills the script)
*/
    die();
    }

/*
* When input is recieved first check the OS of the client users machine to call the relevant shutdown commands for Windows or Unix
*/
    $OS = getOS();

/*
* Check if the OS is a windows machine
*/
    if($OS == 'Windows'){
/*
* Check what the command is if it is restart it will restart the machine by calling restartWin()
*/
        if($input == 'restart'){
             restartWin();
        }
/*
* Check what the command is if it is restart it will shutdown the machine by calling shutdownWin()
*/
        if($input == 'shutdown'){
            shutdownWin();
        }
/*
*
*/
    }else if($OS == 'Linux' || 'Mac'){
/*
* Check what the command is if it is restart it will restart the machine by calling restartUnix()
*/
        if($input == 'restart'){
            restartUnix();
        }
/*
* Check what the command is if it is restart it will shutdown the machine by calling shutdownUnix()
*/
        if($input == 'shutdown'){
            shutdownUnix();
        }
    }

/*
* Gets the Client Users Operating System
*/
    function getOS(){

    //Save the User Agent
    $agent = $_SERVER['HTTP_USER_AGENT'];
    //check to see what the operating system sent by the user agent is and assign acordingly
    if(preg_match('/Linux/',$agent)) $os = 'Linux';
    elseif(preg_match('/Win/',$agent)) $os = 'Windows';
    elseif(preg_match('/Mac/',$agent)) $os = 'Mac';
    //no OS is found
    else $os = 'UnKnown';

    //return the OS
    return $os;
    }

    function restartWin(){
        //restarts a windows machine
       exec('shutdown -f -t 0 -r');
    }

    function restartUnix(){
        //restarts a Linux / Mac Machine
        system('shutdown -r');
    }

    function shutdownWin(){
        //shutsdown a windows machine
       exec ('shutdown -s -t 0');
    }

    function shutdownUnix(){
        //shutsdown a Linux / Mac Machine
        system('shutdown -h');
    }
?>
