var controlBox:Transform;
var state = "closed";

function Start () {

}

function Update () {
state = controlBox.GetComponent(ControlBox).state;

	if (state == "open")
	{
		transform.position.y = 15;
	}
	else if (state == "closed")
	{
		transform.position.y = 4;
	}

}