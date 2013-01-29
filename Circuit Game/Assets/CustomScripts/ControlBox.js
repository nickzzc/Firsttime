var isActivated = false;
var state = "null";

function Start () {

}

function Update () {

}

function OnCollisionEnter(collider : Collision)
    {
    Debug.Log("boom");
    Debug.Log(state);
    if(collider.gameObject.CompareTag("controlCube"))
        {
        Debug.Log("sensing control cube...");
        state = collider.gameObject.GetComponent(OpenCube).state;
        Debug.Log(collider.gameObject.state);
        Debug.Log(state);
        }
    }