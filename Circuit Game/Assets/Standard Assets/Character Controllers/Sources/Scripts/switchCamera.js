var Camera0 : Camera;

var Camera1 : Camera;
private var startCamera : int = 1;

function Start ()
{
    Camera0.enabled = true;
    Camera1.enabled = false;
    startCamera = 1;
}

function Update ()
{
    if(Input.GetKeyDown("1") && (startCamera == 1))
    {
        startCamera = 2;
        Camera0.enabled = false;
        Camera1.enabled = true;
    }
    else if (Input.GetKeyDown("2") && (startCamera == 2))
    {
        startCamera = 1;
        Camera0.enabled = true;
        Camera1.enabled = false;
    }
}