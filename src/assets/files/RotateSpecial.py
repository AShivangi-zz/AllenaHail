#Rotate Special
#by Allena Hail
#www.allenahail.com

if(cmds.window("rotWindow", exists=True)):
    cmds.deleteUI(rotWindow)

rotWindow = cmds.window(title='Rotate Special', iconName='rotWindow', widthHeight=(300,300))
cmds.columnLayout(adjustableColumn=False)
cmds.button(label='Convert to Vertices', width=300, height=50, c = lambda c:convertVert())
cmds.button(label='Convert to Control Vertices', width=300, height=50, c = lambda c:convertCV())
cmds.text('Degree')
rotateAmount = cmds.floatSliderGrp('slider', field=True, min=-360,max=360)
cmds.setParent('..')
cmds.rowLayout(numberOfColumns=3,columnWidth3=(100,100,100))
cmds.button(label='Rotate X', width=100, command = lambda x:rotateX())
cmds.button(label='Rotate Y', width=100, command = lambda y:rotateY())
cmds.button(label='Rotate Z', width=100, command = lambda z:rotateZ())
cmds.setParent('..')
cmds.showWindow(rotWindow)

def rotateX(*args):
    cmds.rotate((cmds.floatSliderGrp('slider', query=True, value=True)), 0, 0, os=True)
def rotateY(*args):
    cmds.rotate(0, (cmds.floatSliderGrp('slider', query=True, value=True)), 0, os=True)
def rotateZ(*args):
    cmds.rotate(0, 0, (cmds.floatSliderGrp('slider', query=True, value=True)), os=True)
def convertVert(*args):
    cmds.select(cmds.polyListComponentConversion((cmds.ls(selection=True)), tv=True)) 
def convertCV(*args):
    name = str(cmds.ls(sl=1, type='nurbsCurve', dag=1))
    stringName = name.split("'")
    degs = cmds.getAttr((stringName[1] + '.degree'))
    spans = cmds.getAttr((stringName[1] + '.spans'))
    cvs = degs+spans
    cmds.select((stringName[1])+(".cv[0:")+str(cvs)+("]"))